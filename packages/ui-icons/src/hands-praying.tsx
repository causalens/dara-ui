import { faHandsPraying } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * HandsPraying icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const HandsPraying = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHandsPraying} {...props} />;
};

export default HandsPraying;
