import { faVirusSlash } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * VirusSlash icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const VirusSlash = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faVirusSlash} {...props} />;
};

export default VirusSlash;
