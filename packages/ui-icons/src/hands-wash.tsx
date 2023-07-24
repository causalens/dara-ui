import { faHandsWash } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * HandsWash icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const HandsWash = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHandsWash} {...props} />;
};

export default HandsWash;
