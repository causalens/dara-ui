import { faPoll } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Poll icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Poll = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPoll} {...props} />;
};

export default Poll;
