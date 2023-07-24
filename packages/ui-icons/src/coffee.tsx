import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Coffee icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Coffee = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCoffee} {...props} />;
};

export default Coffee;
